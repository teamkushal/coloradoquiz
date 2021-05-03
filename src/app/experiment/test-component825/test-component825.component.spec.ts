import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent825Component } from './test-component825.component';

describe('TestComponent825Component', () => {
  let component: TestComponent825Component;
  let fixture: ComponentFixture<TestComponent825Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent825Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
