import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1226Component } from './test-component1226.component';

describe('TestComponent1226Component', () => {
  let component: TestComponent1226Component;
  let fixture: ComponentFixture<TestComponent1226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
