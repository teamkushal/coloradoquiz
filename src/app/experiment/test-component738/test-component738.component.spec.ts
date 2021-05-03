import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent738Component } from './test-component738.component';

describe('TestComponent738Component', () => {
  let component: TestComponent738Component;
  let fixture: ComponentFixture<TestComponent738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent738Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
