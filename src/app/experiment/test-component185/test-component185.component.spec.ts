import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent185Component } from './test-component185.component';

describe('TestComponent185Component', () => {
  let component: TestComponent185Component;
  let fixture: ComponentFixture<TestComponent185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
