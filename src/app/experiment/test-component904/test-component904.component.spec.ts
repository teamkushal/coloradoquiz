import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent904Component } from './test-component904.component';

describe('TestComponent904Component', () => {
  let component: TestComponent904Component;
  let fixture: ComponentFixture<TestComponent904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent904Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
