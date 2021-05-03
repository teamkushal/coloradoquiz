import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1242Component } from './test-component1242.component';

describe('TestComponent1242Component', () => {
  let component: TestComponent1242Component;
  let fixture: ComponentFixture<TestComponent1242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1242Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
