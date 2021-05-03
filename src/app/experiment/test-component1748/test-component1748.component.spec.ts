import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1748Component } from './test-component1748.component';

describe('TestComponent1748Component', () => {
  let component: TestComponent1748Component;
  let fixture: ComponentFixture<TestComponent1748Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1748Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
