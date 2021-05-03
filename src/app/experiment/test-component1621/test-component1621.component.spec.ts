import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1621Component } from './test-component1621.component';

describe('TestComponent1621Component', () => {
  let component: TestComponent1621Component;
  let fixture: ComponentFixture<TestComponent1621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1621Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
