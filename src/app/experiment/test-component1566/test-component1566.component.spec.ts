import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1566Component } from './test-component1566.component';

describe('TestComponent1566Component', () => {
  let component: TestComponent1566Component;
  let fixture: ComponentFixture<TestComponent1566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1566Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
