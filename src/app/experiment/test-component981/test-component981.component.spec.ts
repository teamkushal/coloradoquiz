import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent981Component } from './test-component981.component';

describe('TestComponent981Component', () => {
  let component: TestComponent981Component;
  let fixture: ComponentFixture<TestComponent981Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent981Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
