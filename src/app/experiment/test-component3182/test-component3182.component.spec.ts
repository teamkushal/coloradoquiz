import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3182Component } from './test-component3182.component';

describe('TestComponent3182Component', () => {
  let component: TestComponent3182Component;
  let fixture: ComponentFixture<TestComponent3182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
