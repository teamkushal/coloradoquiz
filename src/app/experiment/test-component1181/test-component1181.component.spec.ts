import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1181Component } from './test-component1181.component';

describe('TestComponent1181Component', () => {
  let component: TestComponent1181Component;
  let fixture: ComponentFixture<TestComponent1181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
