import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1577Component } from './test-component1577.component';

describe('TestComponent1577Component', () => {
  let component: TestComponent1577Component;
  let fixture: ComponentFixture<TestComponent1577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1577Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
