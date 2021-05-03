import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1856Component } from './test-component1856.component';

describe('TestComponent1856Component', () => {
  let component: TestComponent1856Component;
  let fixture: ComponentFixture<TestComponent1856Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1856Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
