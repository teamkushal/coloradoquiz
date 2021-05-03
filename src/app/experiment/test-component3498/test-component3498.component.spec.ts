import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3498Component } from './test-component3498.component';

describe('TestComponent3498Component', () => {
  let component: TestComponent3498Component;
  let fixture: ComponentFixture<TestComponent3498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3498Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
