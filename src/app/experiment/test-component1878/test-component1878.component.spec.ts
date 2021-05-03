import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1878Component } from './test-component1878.component';

describe('TestComponent1878Component', () => {
  let component: TestComponent1878Component;
  let fixture: ComponentFixture<TestComponent1878Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1878Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
