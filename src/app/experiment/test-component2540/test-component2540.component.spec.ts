import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2540Component } from './test-component2540.component';

describe('TestComponent2540Component', () => {
  let component: TestComponent2540Component;
  let fixture: ComponentFixture<TestComponent2540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2540Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
