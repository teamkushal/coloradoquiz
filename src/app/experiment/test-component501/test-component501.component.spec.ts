import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent501Component } from './test-component501.component';

describe('TestComponent501Component', () => {
  let component: TestComponent501Component;
  let fixture: ComponentFixture<TestComponent501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent501Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
