import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent651Component } from './test-component651.component';

describe('TestComponent651Component', () => {
  let component: TestComponent651Component;
  let fixture: ComponentFixture<TestComponent651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent651Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
