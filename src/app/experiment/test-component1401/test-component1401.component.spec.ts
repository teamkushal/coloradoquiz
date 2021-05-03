import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1401Component } from './test-component1401.component';

describe('TestComponent1401Component', () => {
  let component: TestComponent1401Component;
  let fixture: ComponentFixture<TestComponent1401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
