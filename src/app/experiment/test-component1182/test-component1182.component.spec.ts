import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1182Component } from './test-component1182.component';

describe('TestComponent1182Component', () => {
  let component: TestComponent1182Component;
  let fixture: ComponentFixture<TestComponent1182Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1182Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
