import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1032Component } from './test-component1032.component';

describe('TestComponent1032Component', () => {
  let component: TestComponent1032Component;
  let fixture: ComponentFixture<TestComponent1032Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1032Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
