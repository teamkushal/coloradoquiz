import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent130Component } from './test-component130.component';

describe('TestComponent130Component', () => {
  let component: TestComponent130Component;
  let fixture: ComponentFixture<TestComponent130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
