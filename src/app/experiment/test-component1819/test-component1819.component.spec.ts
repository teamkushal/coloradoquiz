import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1819Component } from './test-component1819.component';

describe('TestComponent1819Component', () => {
  let component: TestComponent1819Component;
  let fixture: ComponentFixture<TestComponent1819Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1819Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
