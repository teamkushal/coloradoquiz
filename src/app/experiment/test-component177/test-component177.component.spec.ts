import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent177Component } from './test-component177.component';

describe('TestComponent177Component', () => {
  let component: TestComponent177Component;
  let fixture: ComponentFixture<TestComponent177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
