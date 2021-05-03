import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1326Component } from './test-component1326.component';

describe('TestComponent1326Component', () => {
  let component: TestComponent1326Component;
  let fixture: ComponentFixture<TestComponent1326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
