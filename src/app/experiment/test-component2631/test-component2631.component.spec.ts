import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2631Component } from './test-component2631.component';

describe('TestComponent2631Component', () => {
  let component: TestComponent2631Component;
  let fixture: ComponentFixture<TestComponent2631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2631Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
