import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1486Component } from './test-component1486.component';

describe('TestComponent1486Component', () => {
  let component: TestComponent1486Component;
  let fixture: ComponentFixture<TestComponent1486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1486Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
