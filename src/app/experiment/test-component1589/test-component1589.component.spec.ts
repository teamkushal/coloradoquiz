import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1589Component } from './test-component1589.component';

describe('TestComponent1589Component', () => {
  let component: TestComponent1589Component;
  let fixture: ComponentFixture<TestComponent1589Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1589Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
