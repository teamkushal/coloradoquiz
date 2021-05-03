import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3008Component } from './test-component3008.component';

describe('TestComponent3008Component', () => {
  let component: TestComponent3008Component;
  let fixture: ComponentFixture<TestComponent3008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
