import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3128Component } from './test-component3128.component';

describe('TestComponent3128Component', () => {
  let component: TestComponent3128Component;
  let fixture: ComponentFixture<TestComponent3128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
