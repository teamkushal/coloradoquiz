import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1632Component } from './test-component1632.component';

describe('TestComponent1632Component', () => {
  let component: TestComponent1632Component;
  let fixture: ComponentFixture<TestComponent1632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1632Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
