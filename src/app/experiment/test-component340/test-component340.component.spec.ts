import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent340Component } from './test-component340.component';

describe('TestComponent340Component', () => {
  let component: TestComponent340Component;
  let fixture: ComponentFixture<TestComponent340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
