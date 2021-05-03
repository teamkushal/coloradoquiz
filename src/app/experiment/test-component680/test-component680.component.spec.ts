import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent680Component } from './test-component680.component';

describe('TestComponent680Component', () => {
  let component: TestComponent680Component;
  let fixture: ComponentFixture<TestComponent680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent680Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
