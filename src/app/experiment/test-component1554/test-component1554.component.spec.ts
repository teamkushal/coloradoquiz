import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1554Component } from './test-component1554.component';

describe('TestComponent1554Component', () => {
  let component: TestComponent1554Component;
  let fixture: ComponentFixture<TestComponent1554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1554Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
