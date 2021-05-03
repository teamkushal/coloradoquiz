import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1557Component } from './test-component1557.component';

describe('TestComponent1557Component', () => {
  let component: TestComponent1557Component;
  let fixture: ComponentFixture<TestComponent1557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1557Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
