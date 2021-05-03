import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent710Component } from './test-component710.component';

describe('TestComponent710Component', () => {
  let component: TestComponent710Component;
  let fixture: ComponentFixture<TestComponent710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent710Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
