import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent554Component } from './test-component554.component';

describe('TestComponent554Component', () => {
  let component: TestComponent554Component;
  let fixture: ComponentFixture<TestComponent554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent554Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
