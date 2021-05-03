import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1820Component } from './test-component1820.component';

describe('TestComponent1820Component', () => {
  let component: TestComponent1820Component;
  let fixture: ComponentFixture<TestComponent1820Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1820Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
