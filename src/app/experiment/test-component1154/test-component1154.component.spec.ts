import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1154Component } from './test-component1154.component';

describe('TestComponent1154Component', () => {
  let component: TestComponent1154Component;
  let fixture: ComponentFixture<TestComponent1154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
