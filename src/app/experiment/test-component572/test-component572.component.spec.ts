import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent572Component } from './test-component572.component';

describe('TestComponent572Component', () => {
  let component: TestComponent572Component;
  let fixture: ComponentFixture<TestComponent572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent572Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
