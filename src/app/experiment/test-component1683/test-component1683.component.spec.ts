import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1683Component } from './test-component1683.component';

describe('TestComponent1683Component', () => {
  let component: TestComponent1683Component;
  let fixture: ComponentFixture<TestComponent1683Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1683Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
