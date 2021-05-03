import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1448Component } from './test-component1448.component';

describe('TestComponent1448Component', () => {
  let component: TestComponent1448Component;
  let fixture: ComponentFixture<TestComponent1448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1448Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
