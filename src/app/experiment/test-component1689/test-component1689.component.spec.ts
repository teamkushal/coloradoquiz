import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1689Component } from './test-component1689.component';

describe('TestComponent1689Component', () => {
  let component: TestComponent1689Component;
  let fixture: ComponentFixture<TestComponent1689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1689Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
