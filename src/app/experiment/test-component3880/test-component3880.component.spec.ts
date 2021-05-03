import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3880Component } from './test-component3880.component';

describe('TestComponent3880Component', () => {
  let component: TestComponent3880Component;
  let fixture: ComponentFixture<TestComponent3880Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3880Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
