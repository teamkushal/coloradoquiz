import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2724Component } from './test-component2724.component';

describe('TestComponent2724Component', () => {
  let component: TestComponent2724Component;
  let fixture: ComponentFixture<TestComponent2724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2724Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
