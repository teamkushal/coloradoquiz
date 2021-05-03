import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1737Component } from './test-component1737.component';

describe('TestComponent1737Component', () => {
  let component: TestComponent1737Component;
  let fixture: ComponentFixture<TestComponent1737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1737Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
