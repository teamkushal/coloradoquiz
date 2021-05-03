import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent488Component } from './test-component488.component';

describe('TestComponent488Component', () => {
  let component: TestComponent488Component;
  let fixture: ComponentFixture<TestComponent488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent488Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
