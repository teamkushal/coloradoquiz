import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1810Component } from './test-component1810.component';

describe('TestComponent1810Component', () => {
  let component: TestComponent1810Component;
  let fixture: ComponentFixture<TestComponent1810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1810Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
