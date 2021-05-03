import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent532Component } from './test-component532.component';

describe('TestComponent532Component', () => {
  let component: TestComponent532Component;
  let fixture: ComponentFixture<TestComponent532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent532Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
