import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2401Component } from './test-component2401.component';

describe('TestComponent2401Component', () => {
  let component: TestComponent2401Component;
  let fixture: ComponentFixture<TestComponent2401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
