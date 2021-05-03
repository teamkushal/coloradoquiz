import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent637Component } from './test-component637.component';

describe('TestComponent637Component', () => {
  let component: TestComponent637Component;
  let fixture: ComponentFixture<TestComponent637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent637Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
