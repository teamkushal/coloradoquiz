import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2576Component } from './test-component2576.component';

describe('TestComponent2576Component', () => {
  let component: TestComponent2576Component;
  let fixture: ComponentFixture<TestComponent2576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2576Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
