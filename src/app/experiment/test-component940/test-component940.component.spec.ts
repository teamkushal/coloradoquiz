import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent940Component } from './test-component940.component';

describe('TestComponent940Component', () => {
  let component: TestComponent940Component;
  let fixture: ComponentFixture<TestComponent940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent940Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
